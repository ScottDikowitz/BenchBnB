class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds]) unless params[:bounds].nil?
    render json: @benches.to_json
  end

  def create
    # byebug
    @bench = Bench.create(bench_params)
    if @bench
      render json: @bench.to_json
    end

  end

  private
  def bench_params
    self.params.require(:bench).permit(:lat, :lng, :description)
  end

end
