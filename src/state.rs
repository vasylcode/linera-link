use linera_sdk::views::{ViewStorageContext, MapView};
use linera_views::views::{GraphQLView, RootView};
use linera_link::{User};
use thiserror::Error;

#[derive(RootView, GraphQLView)]
#[view(context = "ViewStorageContext")]
pub struct Application {
    pub users: MapView<String, User>,
}

#[allow(dead_code)]
impl Application {

    pub(crate) async fn set_user(
        &mut self,
        user: User,
    ) -> Result<(), StateError> {
        match self.users.insert(&user.clone().username, user) {
            Ok(_) => Ok(()),
            Err(err) => Err(StateError::ViewError(err)),
        }
    }

}


#[derive(Debug, Error)]
#[error("test1")]
pub enum StateError {
    #[error("View error")]
    ViewError(#[from] linera_views::views::ViewError),
}