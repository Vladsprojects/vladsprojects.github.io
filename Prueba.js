

async function run() {
    // Crear un modelo secuencial.
    const model = tf.sequential();
  
    // Añadir una capa densa (totalmente conectada) para la entrada.
    model.add(tf.layers.dense({inputShape: [numFeatures], units: 50, activation: 'relu'}));
  
    // Añadir más capas según sea necesario.
    model.add(tf.layers.dense({units: 25, activation: 'relu'}));
  
    // Añadir la capa de salida.
    model.add(tf.layers.dense({units: numOutputFeatures, activation: 'sigmoid'}));
  
    // Compilar el modelo con un optimizador y una función de pérdida.
    model.compile({optimizer: 'adam', loss: 'meanSquaredError'});
  
    // Preparar los datos de entrada y salida (Xs, Ys) aquí.
    // ...
  
    // Entrenar el modelo.
    await model.fit(xs, ys, {
      epochs: 100,
      callbacks: {
        onEpochEnd: (epoch, log) => console.log(`Época ${epoch}: pérdida = ${log.loss}`)
      }
    });
  
    // Aquí podrías usar el modelo para hacer predicciones.

    // Asumiendo que tf ha sido incluido en tu página

    // 1. Preparar los datos (convertirlos en tensores y normalizar si es necesario)

    // 2. Construir el modelo
    model.add(tf.layers.dense({inputShape: [5], units: 128, activation: 'relu'}));
    model.add(tf.layers.dense({units: 64, activation: 'relu'}));
    // Suponiendo que quieres predecir la "activación" de 5 números basados en la probabilidad
    model.add(tf.layers.dense({units: 5, activation: 'sigmoid'})); 

    // 3. Compilar el modelo
    model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
    });

    // 4. Entrenar el modelo
    model.fit(trainXs, trainYs, {
    epochs: 100,
    validationData: [testXs, testYs],
    callbacks: {
        onEpochEnd: (epoch, log) => console.log(`Época ${epoch}: pérdida = ${log.loss}, precisión = ${log.accuracy}`)
    }
    });

    // 5. Usar el modelo para hacer predicciones
    model.predict(testXs).print();

  }
  
  run();

  
  