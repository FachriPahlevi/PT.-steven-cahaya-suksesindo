<?php

namespace App\Http\Controllers;

use App\Models\Translate;
use Illuminate\Http\Request;

class TranslateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show($lang)
    {
        // Mengatur bahasa aplikasi ke bahasa yang dipilih
        app()->setLocale($lang);

        // Mengambil terjemahan
        $translations = [
            'stone_for_interiors' => __('messages.stone_for_interiors'),
            'bring_natural_luxury' => __('messages.bring_natural_luxury'),
            'natural_luxury' => __('messages.natural_luxury'),
            'to_every_corner_of_your_room' => __('messages.to_every_corner_of_your_room'),
            'we_believe' => __('messages.we_believe'),
            'stone_is_not_just_material' => __('messages.stone_is_not_just_material'),
            'it_is_nature_s_artwork' => __('messages.it_is_nature_s_artwork'),
            'enriching_your_room_character' => __('messages.enriching_your_room_character'),
            'explore_our_products' => __('messages.explore_our_products'),
            'trusted_500_clients' => __('messages.trusted_500_clients'),
            'natural_stone_100' => __('messages.natural_stone_100'),
            'processed_directly_from_mines' => __('messages.processed_directly_from_mines'),
        ];

        return response()->json(['translations' => $translations]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Translate $translate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Translate $translate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Translate $translate)
    {
        //
    }
}
