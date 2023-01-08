# thermometer_temp_assignment
● Collect in batch thermometer records from one API endpoint. Use the THERM001 data as a batch example. On
the front end, the user would have to click on a "Browse" button, select the THERM001 file, and press a "Send" button. The batch should be uploaded to the backend, parsed (using “streams” process to avoid extreme memory usage) and the records should be saved inside MongoDB.
● Display the thermometer temperature history in a chart for a 1-year timespan. Data should be fetched in an efficient way (do not fetch the entire dataset and plot 10 of thousands of points in the graph)
● Use NodeJS with express + MongoDB for the backend. You can use any framework of your choice for the Frontend.