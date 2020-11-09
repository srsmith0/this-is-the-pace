class Api::UsersController < ApplicationController
  before_action :authenticate_user! , only: [:update]

  def
end
