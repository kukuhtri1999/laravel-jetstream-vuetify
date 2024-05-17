<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'price',
        'cost_price',
        'weight',
        'dimensions',
        'sku',
        'barcode',
        'quantity',
        'low_stock_threshold',
        'image_url',
    ];

}
