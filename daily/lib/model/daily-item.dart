import 'package:intl/intl.dart';

class DailyItem {
  bool _isChecked;
  String _text;
  DateTime _start;
  DateTime _end;

  void set isChecked(bool value) { _isChecked = value; }
  bool get isChecked { return _isChecked; }

  void set text(String value) { _text = value; }
  String get text { return _text; }

  void set start(DateTime value) { _start = value; }
  DateTime get start { return _start; }

  void set end(DateTime value) { _end = value; }
  DateTime get end { return _end; }

  DailyItem() {
    this._isChecked = false;
    this._text = "";
    this._start = DateTime.now();
    this._end = DateTime.now();
  }

  String toString() => "IsChecked: ${_isChecked}, Text: ${_text}, Start: ${_start}, End: ${_end}";
}