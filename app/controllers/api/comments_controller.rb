class Api::CommentsController < ApplicationController
  def index
    post = Post.find(params[:post_id])
    render json: post.comments.all
  end

  def create
    post = Post.find(params[:post_id])
    new_comment = post.comments.new(comment_params)
    if new_comment.save
      render json: new_comment
    else
      render json: new_comment.errors, status: 422
    end
  end


  def destroy
    set_comment
    render json: @comment.destroy
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:author, :content, :post_id)
  end


end
