<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Product/Products', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('Product/CreateProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => "required|unique:products,name",
            'category' => "required",
            'price' => "required",
            'stock' => "required",
        ]);
        $product = new Product;
        $product->name = $request->name;
        $product->category = $request->category;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->save();
        $products = Product::all();
        return Inertia::render('Product/Products', ['products' => $products]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/SingleProduct', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/EditProduct', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->name = $request->name;
        $product->category = $request->category;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->update();
        // $products = Product::all();

        // return Inertia::render('Product/Products', ['products' => $products]);
        // return   Route::Inertia('/product', "product.index");
        // return Redirect::route('product.index');
        return to_route('product.index', [], 303);
        // return Inertia::location(url('/product'));
        // return redirect()->route("product.index");
        // return Redirect::route('product.index')->with('success', 'Utilizatorul a fost modificat.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        // return Inertia::render('Product/Products', ['products' => Product::all()]);
        // return Inertia::render('Dashboard', ['products' => Product::all()]);
        return to_route('product.index', [], 303);
    }
}
