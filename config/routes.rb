Rails.application.routes.draw do

  root to: 'pages#home'
  get 'home', to: 'pages#home'
  get 'generatedfile', to: 'pages#generatedfile'


end
