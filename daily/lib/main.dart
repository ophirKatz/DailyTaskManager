import 'package:flutter/material.dart';
import 'screens/home/homepage.dart';

void main() => runApp(DailyApp());

class DailyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Daily',
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      home: HomePage(title: 'Daily Home Page'),
    );
  }
}