Rails.application.routes.draw do

  root 'site#index'

  get 'site/index'
  get 'site/rails_only'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
