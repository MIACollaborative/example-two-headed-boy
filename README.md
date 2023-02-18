## To Test

Run 
`$ npm run start-agent`
to see the "Agent" version
or 
`$ npm run start-oldschool`
to see the "Old Schoo" version

Note that both versions share the same "Settings" screen.


## Key Points

1. See the 'start-agent' and 'start-oldschool' scripts in package.json. Note how they set the environment variable 'HS_VARIANT' before invoking 'npx expo start'.

2. Look in app.config.js and note how the environment variable is read into one of the config fields ('variant')

3. Look in App.js to see how the config is read and used to select the desired Navigation class, depending on the value of expoConfig.variant.

And that's how it works!