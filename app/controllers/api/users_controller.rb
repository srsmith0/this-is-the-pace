class Api::UsersController < ApplicationController
  before_action :authenticate_user! , only: [:update]

  def update
    if current_user.update (user_params)
      render json: current_user
    else
      render json: {errors.comment.errors}, status: :unproccessable_entity
    end
  end

  def destroy
    render json: User.find(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
