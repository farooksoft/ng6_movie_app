import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlicer'
})
export class TextSlicerPipe implements PipeTransform {

  transform(text: string, length: number=100): string {
    if(text.length>length){
      let subText=text.substring(0,length);
      subText=subText+"...";
      return subText;
    }
    return text;
  }

}
