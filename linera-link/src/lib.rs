use async_graphql::{Request, Response, SimpleObject};
use linera_sdk::{
    base::{ContractAbi, ServiceAbi, ChainId, Owner, Timestamp},
    graphql::GraphQLMutationRoot,
};
use serde::{Deserialize, Serialize};

pub struct ApplicationAbi;

impl ContractAbi for ApplicationAbi {
    type Parameters = ();
    type InitializationArgument = ();
    type Operation = Operation;
    type Message = ();
    type ApplicationCall = ();
    type SessionCall = ();
    type SessionState = ();
    type Response = ();
}

impl ServiceAbi for ApplicationAbi {
    type Parameters = ();
    type Query = Request;
    type QueryResponse = Response;
}

#[derive(PartialEq, Debug, Clone, Serialize, Deserialize, SimpleObject)]
pub struct User {
    pub username: String,
    pub owner: Owner,
    pub chain_id: ChainId,
    pub timestamp: Timestamp,
}

#[derive(Debug, Deserialize, Serialize, GraphQLMutationRoot)]
pub enum Operation {
    SetUser {
        username: String,
    },
}