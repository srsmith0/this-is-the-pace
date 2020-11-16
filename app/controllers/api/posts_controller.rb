class Api::PostsController < ApplicationController
  def index
    render json: Post.all 
  end

  def admin_posts
    render json: current_user.posts.all
  end

  def show
    set_post
    render json: @post
  end

  def create
    new_post = current_user.posts.new(post_params)
    if new_post.save
      render json: new_post
    else
      render json: new_post.errors, status: 422
    end
  end

  def update
    set_post 
    if @post.update(post_params)
      render json: @post 
    else 
      render json: @post.errors, status: 422
    end
  end

  def destroy
    set_post
    render json: @post.destroy
  end


private
  def post_params
    params.require(:post).permit(:title, :content, :description, :topic, :image, :user_name)
  end

  def set_post
    @post = Post.find(params[:id])
  end 

end
