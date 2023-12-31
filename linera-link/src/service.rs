#![cfg_attr(target_arch = "wasm32", no_main)]

mod state;

use self::state::Application;
use async_trait::async_trait;
use linera_sdk::{base::WithServiceAbi, QueryContext, Service, ViewStateStorage};
use async_graphql::{Request, Response, Schema, EmptySubscription, Object};
use std::sync::Arc;
use thiserror::Error;
use linera_link::{Operation};

linera_sdk::service!(Application);

impl WithServiceAbi for Application {
    type Abi = linera_link::ApplicationAbi;
}

#[async_trait]
impl Service for Application {
    type Error = ServiceError;
    type Storage = ViewStateStorage<Self>;

    async fn query_application(
        self: Arc<Self>,
        _context: &QueryContext,
        // _query: Self::Query,
        request: Request,
    // ) -> Result<(Response), Self::Error> {
    //     Err(ServiceError::QueriesNotSupported)
    // }
    ) -> Result<Response, Self::Error> {
        let schema: Schema<Arc<Application>, MutationRoot, EmptySubscription> =
            Schema::build(self.clone(), MutationRoot {}, EmptySubscription).finish();
        let response = schema.execute(request).await;
        Ok(response)
    }
}

struct MutationRoot;

#[Object]
impl MutationRoot {
    async fn setuser(&self, username: String) -> Vec<u8> {
        bcs::to_bytes(&Operation::SetUser { username }).unwrap()
    }
}

/// An error that can occur while querying the service.
#[derive(Debug, Error)]
pub enum ServiceError {
    /// Query not supported by the application.
    #[error("Queries not supported by application")]
    QueriesNotSupported,

    /// Invalid query argument; could not deserialize request.
    #[error("Invalid query argument; could not deserialize request")]
    InvalidQuery(#[from] serde_json::Error),

    // Add error variants here.
}
