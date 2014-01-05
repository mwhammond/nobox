# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140105221343) do

  create_table "emails", force: true do |t|
    t.string   "from"
    t.string   "to"
    t.string   "cc"
    t.text     "content"
    t.datetime "timestamp"
    t.integer  "projectId"
    t.boolean  "archive"
    t.boolean  "read"
    t.integer  "type"
    t.integer  "origId"
    t.string   "mail_hash"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "subject"
  end

  create_table "projects", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", force: true do |t|
    t.string   "text"
    t.boolean  "archive"
    t.datetime "due"
    t.integer  "projectId"
    t.string   "messages"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
