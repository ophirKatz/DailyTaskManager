import 'package:flutter/material.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';
import 'time-field.dart';
import '../model/daily-item.dart';

class DailyItemWidget extends StatefulWidget {
  DailyItemWidget({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _DailyItemState createState() => _DailyItemState();
}

class _DailyItemState extends State<DailyItemWidget> {
  DailyItem _dailyItem = DailyItem();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        
        children: [
          Row(children: [
            Checkbox(
              value: _dailyItem.isChecked,
              onChanged: (bool value) {
                setState(() {
                  _dailyItem.isChecked = value;
                });
              },
            ),
            BasicTimeField(updateDateTime: (datetime) => setState(() => _dailyItem.start = datetime)),
            BasicTimeField(updateDateTime: (datetime) => setState(() => _dailyItem.end = datetime)),
            Expanded(
              child: TextField(
                decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: 'Description'
                ),
                onChanged: (text) {
                  print("First text field: $text");
                  setState(() => _dailyItem.text = text);
                },
              ),
            ),
          ],
        ),
        Text(_dailyItem.toString()),
        ],
      ),
    );
  }
}