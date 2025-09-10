#!/bin/bash

# Script de déploiement pour hébergement traditionnel
# Usage: ./deploy.sh

echo "🚀 Déploiement Mason Sterling Website"
echo "======================================"

# Configuration (à modifier selon votre hébergeur)
FTP_HOST="ftp.votre-hebergeur.com"
FTP_USER="votre-username"
FTP_PASS="votre-password"
FTP_DIR="/public_html"

# Couleurs pour output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Build du projet
echo -e "${YELLOW}📦 Construction du projet...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build"
    exit 1
fi

echo -e "${GREEN}✅ Build réussi${NC}"

# 2. Copier le fichier config.js
echo -e "${YELLOW}📋 Copie de la configuration...${NC}"
cp public/config.js dist/config.js

# 3. Copier .htaccess
echo -e "${YELLOW}📋 Copie du .htaccess...${NC}"
cp .htaccess.example dist/.htaccess

# 4. Créer une archive
echo -e "${YELLOW}📦 Création de l'archive...${NC}"
cd dist
tar -czf ../deploy.tar.gz .
cd ..

echo -e "${GREEN}✅ Archive créée: deploy.tar.gz${NC}"

# 5. Option FTP (décommentez si vous voulez automatiser)
# echo -e "${YELLOW}📤 Upload via FTP...${NC}"
# curl -T deploy.tar.gz ftp://$FTP_USER:$FTP_PASS@$FTP_HOST$FTP_DIR/

# 6. Instructions manuelles
echo ""
echo "======================================"
echo -e "${GREEN}📋 Prochaines étapes:${NC}"
echo ""
echo "1. Uploadez le contenu du dossier 'dist/' sur votre serveur"
echo "   - Via FTP: FileZilla, Cyberduck, etc."
echo "   - Via cPanel: Gestionnaire de fichiers"
echo ""
echo "2. Assurez-vous que .htaccess est bien copié"
echo ""
echo "3. Configurez config.js avec vos vraies clés API"
echo ""
echo "4. Testez votre site: https://votre-domaine.com"
echo ""
echo "======================================"

# 7. Optionnel: Ouvrir FileZilla
read -p "Voulez-vous ouvrir FileZilla maintenant? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    if command -v filezilla &> /dev/null
    then
        filezilla &
    else
        echo "FileZilla n'est pas installé"
    fi
fi