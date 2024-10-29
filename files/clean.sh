if [ "$1" == "bdd" ]; then
    docker-compose down -v
    docker volume prune -f
elif [ "$1" == "all" ]; then
    docker-compose down -v --rmi all
    docker volume prune -f
    rm -rf node_modules
else
    echo "Argument non valide. Utilisez 'bdd' ou 'all'."
fi
