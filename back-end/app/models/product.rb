# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :string
#  image       :string
#  name        :string
#  price       :string
#  total       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint
#  user_id     :bigint
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#  index_products_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (user_id => users.id)
#
class Product < ApplicationRecord
  belongs_to :category
  belongs_to :user
end
