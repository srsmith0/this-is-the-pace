class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :content
      t.string :image
      t.string :comments

      t.timestamps
    end
  end
end
