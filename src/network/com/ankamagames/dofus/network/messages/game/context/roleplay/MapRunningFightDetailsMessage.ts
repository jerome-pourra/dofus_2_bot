import { GameFightFighterLightInformations } from "./../../../../types/game/context/fight/GameFightFighterLightInformations";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MapRunningFightDetailsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2005;

	public fightId: number = 0;
	public attackers: Array<GameFightFighterLightInformations>;
	public defenders: Array<GameFightFighterLightInformations>;

    public constructor()
    {
        super();
        this.attackers = Array<GameFightFighterLightInformations>();
        this.defenders = Array<GameFightFighterLightInformations>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MapRunningFightDetailsMessage(input);
    }

    private deserializeAs_MapRunningFightDetailsMessage(input: ICustomDataInput)
    {
        let _id2: number = 0;
        let _item2: GameFightFighterLightInformations;
        let _id3: number = 0;
        let _item3: GameFightFighterLightInformations;
        this._fightIdFunc(input);
        let _attackersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _attackersLen; _i2++)
        {
            _id2 = input.readUnsignedShort();
            _item2 = ProtocolTypeManager.getInstance(GameFightFighterLightInformations,_id2);
            _item2.deserialize(input);
            this.attackers.push(_item2);
        }
        let _defendersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _defendersLen; _i3++)
        {
            _id3 = input.readUnsignedShort();
            _item3 = ProtocolTypeManager.getInstance(GameFightFighterLightInformations,_id3);
            _item3.deserialize(input);
            this.defenders.push(_item3);
        }
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of MapRunningFightDetailsMessage.fightId.");
        }
    }

}