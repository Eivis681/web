# frozen_string_literal: true

# Receptu sukurimo migracijos duomenu baze
class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :instruction, null: false
      t.string :image, null: false
      t.timestamps
    end
  end
end
