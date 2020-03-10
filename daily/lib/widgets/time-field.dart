import 'package:flutter/material.dart';
import 'package:datetime_picker_formfield/datetime_picker_formfield.dart';
import 'package:intl/intl.dart';

class BasicTimeField extends StatelessWidget {
  BasicTimeField({this.updateDateTime});

  final Function updateDateTime;
  
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: DateTimeField(
        format: format,
        onShowPicker: (context, currentValue) async {
          final time = await showTimePicker(
            context: context,
            initialTime: TimeOfDay.fromDateTime(currentValue ?? DateTime.now()),
          );
          return DateTimeField.convert(time);
        },
        onChanged: (DateTime newValue) => updateDateTime(newValue),
      ),
    );
  }

  final format = DateFormat("HH:mm");
}