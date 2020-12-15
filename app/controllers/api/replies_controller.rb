class Api::RepliesController < ApplicationController
  def index
    comment = Comment.find(params[:comment_id])
    render json: comment.replies.all
  end

  def create
    new_reply = Reply.new(reply_params)
    if new_reply.save
      render json: new_reply
    else
      render json: new_reply.errors, status: 422
    end
  end


  def destroy
    set_reply
    render json: @reply.destroy
  end

  private

  def set_reply
    @reply = Reply.find(params[:id])
  end

  def reply_params
    params.require(:reply).permit(:author, :content)
  end
end
