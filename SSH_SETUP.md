# SSH Setup for GitHub

The remote has been updated to use SSH: `git@github.com:oldwestsolutions/OldWestSolutions.git`

## If you need to set up SSH keys:

1. **Check if you have an SSH key:**
   ```bash
   ls -al ~/.ssh
   ```
   Look for files named `id_rsa.pub` or `id_ed25519.pub`

2. **Generate a new SSH key (if needed):**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   Press Enter to accept default file location, then set a passphrase (optional).

3. **Add SSH key to ssh-agent:**
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

4. **Copy your public key:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Copy the entire output.

5. **Add to GitHub:**
   - Go to https://github.com/settings/keys
   - Click "New SSH key"
   - Paste your key and save

6. **Test the connection:**
   ```bash
   ssh -T git@github.com
   ```

## If you need to use a different repository:

If you don't have access to `oldwestsolutions/OldWestSolutions`, update the remote:

```bash
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

Then push:
```bash
git push -u origin main
```

## Current Remote (SSH):
```
git@github.com:oldwestsolutions/OldWestSolutions.git
```

