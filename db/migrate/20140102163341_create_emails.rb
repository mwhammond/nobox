class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :from
      t.string :to
      t.string :cc
      t.text :content
      t.datetime :timestamp
      t.integer :projectId
      t.boolean :archive
      t.boolean :read
      t.integer :type
      t.integer :origId
      t.string :hash

      t.timestamps
    end
  end
end
