<?php

namespace App\Http\Controllers;

use App\Photo;
use Illuminate\Http\Request;
use App\Album;
use App\Http\Resources\PhotoResource;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * /api/albums/20/photos
     */
    public function index(Album $album)
    {
        //serialização - pegar objetos - texto
        //return $album->photos; //variavel é coleção | método - criador queries
        return PhotoResource::collection($album->photos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Album $album)
    {
       $request
            ->file('file_name')
            ->store("$album->id");
        $fileName = $request->file('file_name')->hashName();
        $photo = Photo::create([
            'name' => $request->name,
            'album_id' => $album->id,
            'file_name' => $fileName
        ]);
        return new PhotoResource($photo);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function show(Photo $photo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function edit(Photo $photo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photo $photo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Photo  $photo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Photo $photo)
    {
        //
    }

    public function photoUrl($photoName){
        $photos = Photo::whereFileName($photoName)->get();
        if(!$photos->count()){
            abort(404); //404 - Not found
        }
        $photo = $photos->first();
        $photoPath = storage_path("app/{$photo->album_id}/$photo->file_name");
        return response()->download($photoPath);
    }
}
