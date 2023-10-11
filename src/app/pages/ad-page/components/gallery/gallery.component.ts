import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';
import { Image } from 'src/app/pages/ad-page/interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() currentAdvert!: CurrentAdvert;
  images: Image[] = [];
  currentImage!: string;

  ngOnInit(): void {
    this.currentAdvert.imagesIds.map((img) => {
      let image = {
        url: 'http://194.87.237.48:5000/Images/' + img,
      };
      this.images.push(image);
    });
    if (this.images.length) {
      this.currentImage = this.images[0].url;
    } else {
      this.currentImage =
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    }
  }

  setCurrentImage(i: number) {
    this.currentImage = this.images[i].url;
  }
}
