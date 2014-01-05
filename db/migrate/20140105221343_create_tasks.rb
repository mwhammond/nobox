class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :text
      t.boolean :archive
      t.datetime :due
      t.integer :projectId
      t.string :messages

      t.timestamps
    end
  end
end
