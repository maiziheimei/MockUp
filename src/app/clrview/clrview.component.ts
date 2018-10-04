import { NestedTreeControl} from '@angular/cdk/tree';
import { Component, Inject, Injectable, OnInit, Optional} from '@angular/core';
import { MatTreeNestedDataSource} from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf, from} from 'rxjs';
// import { DialogOverviewExampleDialogComponent} from '../modell-design/modell-design.component';
import {MAT_DIALOG_DATA} from '@angular/material';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}


/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor( @Inject(MAT_DIALOG_DATA) public treedata: any) {
    this.initialize(treedata);
  }

  initialize(treedata: any) {
    if (this.treedata === null) {
      console.log('... the treedata is null');
    } else {
      console.log('... the treedata got from local jsonfile length is: ' + this.treedata.length);

      // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
      //     file node as children.
      const data = this.buildFileTree(this.treedata, 0);

      // Notify the change.
      this.dataChange.next(data);
    }
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    const data: any[] = [];
    for (const k of Object.keys(value)) {
      const v = value[k];
      const node = new FileNode();
      node.filename = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1);
      } else {
        node.type = v;
      }
      data.push(node);
    }
    return data;
  }
}

@Component({
  selector: 'app-clrview',
  templateUrl: './clrview.component.html',
  styleUrls: ['./clrview.component.css'],
  providers: [FileDatabase]
})
export class ClrviewComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<FileNode>;

  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase,
              @Optional() @Inject(MAT_DIALOG_DATA) public treedata: any) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  private _getChildren = (node: FileNode) => observableOf(node.children);

  hasNestedChild = (_: number, nodeData: FileNode) =>  !(nodeData.type);


  ngOnInit() {
  }

}
