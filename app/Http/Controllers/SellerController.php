<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    //
    public function index()
    {
        return response()->json(['sellers' => Seller::all()]);
    }
}
