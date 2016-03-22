"use strict";

import UIBase         from './base';
import UIButton       from './button/base';
import UITextInput    from './input/text';
import UIFileInput    from './input/file';
import UIDateInput    from './input/date';
import UITimeInput    from './input/time';
import UIOptionPicker from './picker/option';
import UIColorPicker  from './picker/color';

module.exports = Object.assign({
  UIButton,
  UITextInput,
  UIFileInput,
  UIDateInput,
  UITimeInput,
  UIOptionPicker,
  UIColorPicker,
}, UIBase);
