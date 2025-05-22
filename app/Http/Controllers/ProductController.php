<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Cloudinary\Cloudinary;
use Illuminate\Support\Facades\Log;
use Cloudinary\Api\Search\SearchApi;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  
public function index(Request $request)
{
     if (!$request->wantsJson()) {
        // Jika bukan request JSON (biasa lewat browser), redirect ke homepage
        return redirect('/');
    }
    try {
        // Cache selama 1 jam
        $images = Cache::remember('cloudinary.products', 3600, function () {
            $searchApi = new SearchApi();

            $results = $searchApi
                ->expression('folder:"PT. Steven Cahaya Suksesindo/Product" AND resource_type:image')
                ->sortBy('created_at', 'desc')
                ->maxResults(100)
                ->execute();

            $resources = $results->getArrayCopy()['resources'] ?? [];

            return collect($resources)->map(function ($item, $index) {
                return [
                    'id' => $index + 1,
                    'name' => basename($item['public_id']),
                    'url' => $item['secure_url'],
                    'featured' => $index < 4,
                    'index' => $index + 1,
                ];
            })->values();
        });

        return response()->json([
            'products' => $images
        ]);
    } catch (\Exception $e) {
        Log::error('Cloudinary search error: ' . $e->getMessage());
        return response()->json(['error' => 'Failed to fetch images'], 500);
    }
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
