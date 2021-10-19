Rails.application.routes.draw do
  get 'category/index'
  get 'products/index'
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      get     "login"    => "sessions#new"
      post    "login"    => "sessions#create"
      delete  "logout"   => "sessions#destroy"
      resources :categories
      resources :products
    end
  end
end
