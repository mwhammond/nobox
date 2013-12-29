class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :from
      t.string :to
      t.string :cc
      t.text :content
      t.datetime :timestap
      t.integer :projectId
      t.boolean :archive
      t.boolean :read
      t.integer :type

      t.timestamps
    end
  end
end
