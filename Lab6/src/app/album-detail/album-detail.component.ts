import { Component, OnInit } from '@angular/core';
import { Album } from '../_models/album-model';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../_services/albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  
  album: Album | undefined;
  inputValue: string = '';

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    this.albumsService.getAlbum(albumIdFromRoute).subscribe((album) => {
      this.album = album;
    });
  }

  changeAlbumTitle(): void {
    this.albumsService.updateAlbum(this.album!.id, this.inputValue).subscribe((album) => {
      this.album!.title = album.title;
    });
  }

}
