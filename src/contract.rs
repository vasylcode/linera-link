#![cfg_attr(target_arch = "wasm32", no_main)]

mod state;

use self::state::Application;
use async_trait::async_trait;
use linera_sdk::{
    base::{SessionId, WithContractAbi, Owner},
    contract::system_api,
    ApplicationCallResult, CalleeContext, Contract, ExecutionResult, MessageContext,
    OperationContext, SessionCallResult, ViewStateStorage,
};
use thiserror::Error;
use linera_link::{User, Operation};

linera_sdk::contract!(Application);

impl WithContractAbi for Application {
    type Abi = linera_link::ApplicationAbi;
}

#[async_trait]
impl Contract for Application {
    type Error = ContractError;
    type Storage = ViewStateStorage<Self>;

    async fn initialize(
        &mut self,
        _context: &OperationContext,
        _argument: Self::InitializationArgument,
    ) -> Result<ExecutionResult<Self::Message>, Self::Error> {
        Ok(ExecutionResult::default())
    }

    async fn execute_operation(
        &mut self,
        context: &OperationContext,
        operation: Self::Operation,
    ) -> Result<ExecutionResult<Self::Message>, Self::Error> {
        match operation {
            Operation::SetUser {
                username
            } => {
                self.execute_setuser_operation(
                    context,
                    username,
                    context.authenticated_signer.unwrap(),
                )
                .await?
            }
        }
        Ok(ExecutionResult::default())
    }

    async fn execute_message(
        &mut self,
        _context: &MessageContext,
        _message: Self::Message,
    ) -> Result<ExecutionResult<Self::Message>, Self::Error> {
        Ok(ExecutionResult::default())
    }

    async fn handle_application_call(
        &mut self,
        _context: &CalleeContext,
        _call: Self::ApplicationCall,
        _forwarded_sessions: Vec<SessionId>,
    ) -> Result<ApplicationCallResult<Self::Message, Self::Response, Self::SessionState>, Self::Error>
    {
        Ok(ApplicationCallResult::default())
    }

    async fn handle_session_call(
        &mut self,
        _context: &CalleeContext,
        _session: Self::SessionState,
        _call: Self::SessionCall,
        _forwarded_sessions: Vec<SessionId>,
    ) -> Result<SessionCallResult<Self::Message, Self::Response, Self::SessionState>, Self::Error>
    {
        Ok(SessionCallResult::default())
    }
}

impl Application {

    async fn execute_setuser_operation(
        &mut self,
        context: &OperationContext,
        username: String,
        owner: Owner,
    ) -> Result<(), ContractError> {
        let timestamp = system_api::current_system_time();
        let chain_id = system_api::current_chain_id();
        log::info!(
            "username = {:?} owner = {:?} chain = {:?} timestamp = {:?}",
            username,
            owner,
            chain_id,
            timestamp
        );

        match context.authenticated_signer {
            Some(_) => {
                let _ = self.set_user(User {
                    username,
                    owner,
                    chain_id,
                    timestamp,
                })
                .await;

                Ok(())
            }
            None => Err(ContractError::InvalidUser),
        }
    }

}

/// An error that can occur during the contract execution.
#[derive(Debug, Error)]
pub enum ContractError {
    /// Failed to deserialize BCS bytes
    #[error("Failed to deserialize BCS bytes")]
    BcsError(#[from] bcs::Error),

    /// Failed to deserialize JSON string
    #[error("Failed to deserialize JSON string")]
    JsonError(#[from] serde_json::Error),

    #[error("Invalid user 123 456 ")]
    InvalidUser,
    // Add more error variants here.
}
