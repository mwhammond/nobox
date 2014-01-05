class FixColumnName < ActiveRecord::Migration
  def change
  rename_column :emails, :hash, :mail_hash 
  end
end
