import { Component, OnInit } from '@angular/core';
import 'fabric'
declare const fabric: any;

@Component({
  selector: 'app-fabric-editor',
  templateUrl: './fabric-editor.component.html',
  styleUrls: ['./fabric-editor.component.css']
})
export class FabricEditorComponent implements OnInit {

  private canvas: any;
  private props: any = {
    canvasFill: '#ffffff',
    canvasImage: '',
    id: null,
    opacity: null,
    fill: null,
    fontSize: null,
    lineHeight: null,
    charSpacing: null,
    fontWeight: null,
    fontStyle: null,
    textAlign: null,
    fontFamily: null,
    TextDecoration: ''
  };

  private textString: string;
  private url: string = '';
  private size: any = {
    width: 500,
    height: 800
  };

  private json: any;
  private globalEditor: boolean = false;
  private textEditor: boolean = false;
  private imageEditor: boolean = false;
  private figureEditor: boolean = false;
  private selected: any;

  constructor() { }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
      hoverCursor: true,
      selection: true,
      selectionBorderColor: 'blue',
      width: 500,
      height: 500
    });

    let add = new fabric.Rect({
      width: 200, height: 100, left: 10, top: 10, angle: 0,
      fill: '#3f51b5'
    });

    this.canvas.add(add);


  }

}
