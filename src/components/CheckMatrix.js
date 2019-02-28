import Base from 'formiojs/components/base/Base';
import editForm from 'formiojs/components/table/Table.form'

export default class CheckMatrix extends Base {
  static schema() {
    return Base.schema({
      type: 'checkmatrix',
      numRows: 3,
      numCols: 3
    });
  }

  static builderInfo = {
    title: 'Check Matrix',
    group: 'basic',
    icon: 'fa fa-table',
    weight: 70,
    documentation: 'http://help.form.io/userguide/#table',
    schema: CheckMatrix.schema()
  }

  static editForm = editForm

  build() {
    this.element = this.ce('div', {
      class: 'table-responsive'
    });
    this.createLabel(this.element);

    var tableClass = 'table ';
    ['striped', 'bordered', 'hover', 'condensed'].forEach(function(prop) {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    }.bind(this));

    var table = this.ce('table', {
      class: tableClass
    });

    // Build the body.
    var tbody = this.ce('tbody');
    this.inputs = [];
    this.checks = [];
    for (let i = 0; i < this.component.numRows; i++) {
      var tr = this.ce('tr');
      this.checks.push([]);
      for (let j = 0; j < this.component.numCols; j++) {
        var td = this.ce('td');
        this.checks[i][j] = this.ce('input', {
          type: 'checkbox'
        });
        this.addInput(this.checks[i][j], td);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    this.element.appendChild(table);
  }

  elementInfo() {
    const info = super.elementInfo();
    info.changeEvent = 'click';
    return info;
  }

  getValue() {
    var value = [];
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      value[rowIndex] = [];
      for (var colIndex in row) {
        var col = row[colIndex];
        value[rowIndex][colIndex] = !!col.checked;
      }
    }
    return value;
  }

  setValue(value) {
    if (!value) {
      return;
    }
    for (var rowIndex in this.checks) {
      var row = this.checks[rowIndex];
      if (!value[rowIndex]) {
        break;
      }
      for (var colIndex in row) {
        var col = row[colIndex];
        if (!value[rowIndex][colIndex]) {
          return false;
        }
        let checked = value[rowIndex][colIndex] ? 1 : 0;
        col.value = checked;
        col.checked = checked;
      }
    }
  }
}
