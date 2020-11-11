class CreateReplies < ActiveRecord::Migration[6.0]
  def change
    create_table :replies do |t|
      t.string :author
      t.string :content
      t.belongs_to :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
