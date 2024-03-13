import { Component, OnInit } from '@angular/core';
import { Album } from '../_models/album-model';
import { AlbumsService } from '../_services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: Album;

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = new Album();
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  addAlbum(): void {
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = new Album();
    });
  }

  updateAlbum(albumId: number, newTitle: string): void {
    const updatedAlbumIndex = this.albums.findIndex(album => album.id === albumId);
    if (updatedAlbumIndex !== -1) {
      this.albumsService.updateAlbum(albumId, newTitle).subscribe(updatedAlbum => {
        this.albums[updatedAlbumIndex] = updatedAlbum;
      });
    }
  }

  deleteAlbum(albumId: number): void {
    const deletedAlbumIndex = this.albums.findIndex(album => album.id === albumId);
    if (deletedAlbumIndex !== -1) {
      this.albumsService.deleteAlbum(albumId).subscribe(() => {
        this.albums.splice(deletedAlbumIndex, 1);
      });
    }
  }
}
