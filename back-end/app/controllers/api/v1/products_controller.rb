class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: %i[ show edit update destroy ]

  def index
    @product = Product.all
    render json: @product
  end

  def new
    @product = Product.new
  end

  def show
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :total, :price, :description, :user_id, :category_id)
  end
end
