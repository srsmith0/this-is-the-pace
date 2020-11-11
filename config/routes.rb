Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: [:update, :destroy]
    resources :posts do
      resources :comments do
        resources :replies
      end
    end
  end
end
