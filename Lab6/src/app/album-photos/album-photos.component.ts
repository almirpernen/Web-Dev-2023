import { Component, OnInit } from '@angular/core';
import { AlbumPhoto } from '../_models/album-photo-model';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../_services/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumPhotos: AlbumPhoto[];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {
    this.albumPhotos = [];
  }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    this.albumsService.getAlbumPhotos(albumIdFromRoute).subscribe((photos) => {
      this.albumPhotos = photos;
    });
  }
}
