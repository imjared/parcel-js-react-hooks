import React, { useState } from 'react';
import _ from 'lodash';

const names = [
  'Cyrstal Charney',
  'Luis Boeke',
  'Jong Chauncey',
  'Marguerita Crisman',
  'Sunday Salcedo',
  'Sandee Kleckner',
  'Tam Townes',
  'Selene Lovins',
  'Danyell Gros',
  'Marcia Sadberry',
  'Gerry Eberhard',
  'Riva Littler',
  'Doyle Schweinsberg',
  'Nam Ingold',
  'Deetta Yokley',
  'Grover Christenberry',
  'Melda Thibodeau',
  'Kiley Carrero',
  'Else Sholes',
  'Spencer Guthrie',
];

const TestComponent = () => {
  const getIdx = () => _.random(0, names.length);
  const [name, setName] = useState(names[getIdx()]);

  return (
    <>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>Hello {name}</div>
            <br />
            <button className="btn btn-primary" onClick={() => {
              setName(names[getIdx()])
            }}>Change name</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComponent;