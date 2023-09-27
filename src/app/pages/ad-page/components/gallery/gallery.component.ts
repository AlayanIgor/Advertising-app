import { Component, Input } from '@angular/core';
import { CurrentAdvert } from 'src/app/core/services/advert-service/interfaces/currentAdvert.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() currentAdvert!: CurrentAdvert;
  images = [
    {
      url: 'https://s3-alpha-sig.figma.com/img/e242/7235/6f9adfc7a058c7f485d505c587645f95?Expires=1696204800&Signature=C1aZQxvfOWcarV1o3Mkd7yzXQKh9lj0lFZPhfOIDY8vDeY7s-vKxkPJEGEx-ylu0gA3S6KqdNyEJhhr-r3lLgyktRvvXlyBah80KZuXk7P-BAy3Nqm-wCI~bHdmAdfzL2q3hy37-kL9Ssgk2WHe50ALpkWN936qiftKrY7vHZ9z9uBrnlROztAgCpaomVURaOwdW724pQrN9F7MFKljd4NBnQ-R-5KO0~RaTY5DP1MaZ-MUDJj4-~NHJJvdHloBHGa0myqlK9CbgZH3ymQTPYUCsBp4davcHxnh9MUyOIIXCOjsanOmy6cDYdklmHWMEdO2-Oo0Ew6bi8lvzG6QmoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/6905/1a55/41243655a0147391b591a7cc329141e9?Expires=1696204800&Signature=C2U8oYPotULMOVhwFUUThBeCuqR3NIe5U19LG5XS35JyGYDjkLh-73HLNW807OMytSNhAIVdOXpMLPXYNSM3--p5HNHY5Oki57Y9MB2hh0fPbKJaZOeZbn7MnVOAxXSyIGTFpgSoKcKzkTUTP8wHx2aVYX8rqi4fpUkibMSfDsbGk-A~JzWjeyZh5MEdDzncRR8YMo14EuhJT6v~0u89Cqhs05uc97PHb~uQnp7n~IUShWQIqtUSu1W0IHb3GIRAU6l89g3bzHRMUYANNoMl~CfLCtSvRJomiyPPqwWJtFqFkngU8Y2j04CUSjKT-sZhH~VFf8VoAJtlj0YnK5bPjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/57c8/0775/80c034b6f6a6230365af9bf72ded32f6?Expires=1696204800&Signature=cVJj6tVS-m1vzgxIOetuwvQOCgPxrykjI~e8fLtH1YE2CtqRgm8uVDmKqYjJjSsG~EiMz~yaaM~ZS359l2ufOwslQgb6uFCxv9Um00wQdOXJ7zFRwa7FUezSXVzTBtV-TNLA3B3jPrf6WitRl0K6uFFoMpZD2T~9-0TPDJ0Ng6z1pnt6jYyfAW6YMYt2s1FPsY1t8EKg4rzYR9bG54lkUEBxiI6DeNvROwmk-zWOZXhCnWpmrWghcFFvWzq5tqbZO9VU3M-1YmOLD5XllyP4DbkH-Nr4625fsPRaSS8xo-B~~V0Uy8aA8rPWG2BdWXO9FtfV1NGx-xnYtkQXTP623w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/b12f/04ac/6ffe8d4dc5bc12e420946ca07897bb62?Expires=1696204800&Signature=Hxu7CdxZgN8IqeH~rXshuyysF5Qg3kxxK0YkIWiXJ7dsnwc6NzwEWLAFrzdi-i7yI1zlYSnE9OGqkKOEQdXHZ4oNaSkZ1zDoQa35VcpM1MmV1D~CTpjjRlX~2TZt7GclgQtjqT-fnawPHJo6McVIreIzp0OtscQ6UKPdgQMXRCCJRS9yGiNL54e3P2Z5dmBslh3FvNH4tIgOOvUEUtKyDylB4by-GQNdwh28oyCuQcf2ilUIkXWEPvqXgOcxWZ38NrD0sVMq3LuZMoQBOuBF4HbaodDNANR~d2htQd6wYOTT~nDbFc9NdvYxjn6Z7FJjgZYhvthUS7gDsH2Ij2qXXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/1809/387a/6343ceb87f592de88b8503bcee1b4642?Expires=1696204800&Signature=nTtGzU5Qv1kPZ~IvA9A2lhLddANyH9BjieYZ10H9Aj-FXQmViFkO-raaW4-irhYtC9xCa~KGUmQoR8ZNEySAOPd5yF~x0tscYhXf6XhN1--igCTAcjQegPXFGeq8bghyc4r2zkMpUfi3xzZAflesOQ6QjW38M1FBI5KRZkFxz8Bf4x7RFxzQV0v9uoyhSiyno37Y~JlwFn89LQllHrn9w72hFUmDAfD61iG2gigO4fOuEB3JpNxqfJxG~OAfbqNnCp6tdL5KUuExbPE2IAQKZNIk9CCLCWxvqNlppkdIZbt51VqPH-tJs1sJvAnx0EZdaC4Yw6felpZKt9~X-l~fTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  currentImage = this.images[0].url;

  setCurrentImage(i: number) {
    this.currentImage = this.images[i].url;
  }
}
