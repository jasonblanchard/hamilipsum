## Hamilipsum
A random text generator sourced from the writings of Alexander Hamilton!

Source text comes from samples of Hamilton's essays in The Federalist Papers.

## Contributing
### Setup
Clone repository `git clone https://github.com/jasonblanchard/hamilipsum.git` and install dependencies `cd hamilipsum && npm install`.

To start hacking, run these two commands:

- `npm start` - spins up a local HTTP server at `http://localhost:8080`

- `npm run watch` - re-builds source on save.

Web app source files are in the `src/` directory. The app is written in React.

The processor that turns source text into JSON is in `scripts/`.

The library that turns the source JSON into random text is in `lib/`.

### Pull Requests
PRs are welcome! Before submitting, you should:
- Rebase `master` and squash all commits. There should only be 1 commit per PR.
- Make sure linters are not failing - `npm run lint`
- Add a [Hamilton lyric or pun](https://github.com/jasonblanchard/hamilipsum/commits/master) in the commit message :)
