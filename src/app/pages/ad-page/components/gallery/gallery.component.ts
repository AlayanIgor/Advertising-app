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
export class GalleryComponent implements AfterViewInit {
  @Input() currentAdvert!: CurrentAdvert;
  images: Image[] = [];
  currentImage!: string;

  ngAfterViewInit(): void {
    this.currentAdvert.imagesIds.map((img) => {
      let image = {
        url: 'http://194.87.237.48:5000/Images/' + img,
      };
      this.images.push(image);
    });
    this.currentImage = this.images[0].url;
  }

  setCurrentImage(i: number) {
    this.currentImage = this.images[i].url;
  }
}
