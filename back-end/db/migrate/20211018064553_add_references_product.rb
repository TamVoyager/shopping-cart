class AddReferencesProduct < ActiveRecord::Migration[6.0]
  def change
    add_reference :products, :user, foreign_key: true
    add_reference :categories, :user, foreign_key: true
  end
end
