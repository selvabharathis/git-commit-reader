import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patch-viewer',
  templateUrl: './patch-viewer.component.html',
  styleUrls: ['./patch-viewer.component.css']
})
export class PatchViewerComponent implements OnInit {

  @Input() patch: string = '';

  diffLines: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.parsePatch();
  }

  parsePatch() {
    const lines = this.patch.split('\n');
    let deletedLineNumber = 1;
    let addedLineNumber = 1;
  
    this.diffLines = lines.map(line => {
      if (line.startsWith('@@')) {
        const match = line.match(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);
        if (match) {
          deletedLineNumber = +match[1]; // Start line of the deleted code
          addedLineNumber = +match[3];   // Start line of the added code
        }
        return { content: line, unchanged: true };
      }
  
      let lineNumberStr: string;
      if (line.startsWith('-')) {
        lineNumberStr = '-' + deletedLineNumber++;
      } else if (line.startsWith('+') || line.startsWith(' ')) {
        lineNumberStr = '' + addedLineNumber++;
      } else {
        lineNumberStr = ' ';
      }
  
      return {
        content: line,
        added: line.startsWith('+'),
        deleted: line.startsWith('-'),
        unchanged: !line.startsWith('+') && !line.startsWith('-'),
        lineNumber: lineNumberStr
      };
    });
  }

}
