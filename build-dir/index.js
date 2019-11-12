import React from 'react';
import ReactDOM from 'react-dom';

import DiffDirTestComponent from '../other-dir/components/OtherDirTestComponent';
import SameDirTestComponent from './components/SameDirTestComponent';

const mountNode = document.getElementById('app');

// Uncomment below to see failure:
// ReactDOM.render(<DiffDirTestComponent />, mountNode);

// Uncomment below to see success
// ReactDOM.render(<SameDirTestComponent />, mountNode);
